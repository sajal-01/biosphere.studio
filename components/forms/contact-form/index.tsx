"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMediaQuery } from "@/hooks/use-media-query";
import { PhoneInput } from "@/components/inputs/phone-input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
interface FormData {
  Date: string;
  Time: string;
  FullName: string;
  Email: string;
  PhoneNumber: string;
  Message: string;
}
export default function ContactForm({ children }: any) {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    Date: new Date().toISOString().split("T")[0],
    Time: new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openDownloadForm, setOpenDownloadForm] = useState(false);

  // Define the type of event for form submission (FormEvent)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formPostData = new FormData();
    for (const key in formData) {
      formPostData.append(key, formData[key as keyof FormData]);
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        body: formPostData,
      });

      const result = await response.json();

      if (!response.ok) {
        toast({
          title: "Failed to submit form",
          description: "Please try again.",
          variant: "destructive",
        });
        return;
      }

      // You might want to show a success message or close the dialog
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("Failed to submit form. Please try again.");
      toast({
        title: "Failed to submit form",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setOpenDownloadForm(false);
    }
  };

  return (
    <Dialog open={openDownloadForm} onOpenChange={setOpenDownloadForm}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className=" w-full max-w-2xl rounded-2xl md:mx-auto">
        <DialogHeader className="flex flex-col items-center justify-center font-montserrat text-xl">
          <DialogTitle className="text-3xl">Get in touch with us</DialogTitle>
          <DialogDescription className="md:text-md md:max-w-lg text-center">
            We respect your privacy and will never share your details. Your
            information is only used to assist you and ensure a smooth
            communication process.
          </DialogDescription>
        </DialogHeader>
        <Card className="border-0 shadow-none">
          <CardContent>
            <form className="form" onSubmit={handleSubmit}>
              <div className="space-y-8 md:space-y-5">
                <div className="space-y-2 hidden">
                  <Label
                    className="pb-1 font-lato text-lg font-normal"
                    htmlFor="Date"
                  >
                    Date
                  </Label>
                  <Input
                    className="text-[16px] md:text-[18px]"
                    id="Date"
                    name="Date"
                    type="Date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    value={formData.Date}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, Date: e.target.value })
                    }
                  />
                  <Label
                    className="pb-1 font-lato text-lg font-normal"
                    htmlFor="Time"
                  >
                    Time
                  </Label>
                  <Input
                    className="text-[16px] md:text-[18px]"
                    id="Time"
                    name="Time"
                    type="Time"
                    defaultValue={new Date().toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    value={formData.Time}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, Time: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    className="pb-1 font-lato text-lg font-normal"
                    htmlFor="FullName"
                  >
                    Full Name
                  </Label>
                  <Input
                    className="text-[16px] md:text-[18px]"
                    id="FullName"
                    name="FullName"
                    required
                    value={formData.FullName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, FullName: e.target.value })
                    }
                  />
                </div>
                <div className="flex md:items-center md:flex-row flex-col md:justify-between md:space-x-2 space-x-0 space-y-2 md:space-y-0">
                  <div className="space-y-2">
                    <Label
                      className="pb-1 font-lato text-lg font-normal"
                      htmlFor="Email"
                    >
                      Email Address
                    </Label>
                    <Input
                      className="text-[16px] md:text-[18px]"
                      id="Email"
                      name="Email"
                      type="Email"
                      required
                      value={formData.Email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, Email: e.target.value })
                      }
                    />
                  </div>
                  <div className="  space-y-2    ">
                    <Label
                      className="pb-1 font-lato text-lg font-normal"
                      htmlFor="PhoneNumber"
                    >
                      Phone Number
                    </Label>
                    <PhoneInput
                      className="w-full"
                      id="PhoneNumber"
                      name="PhoneNumber"
                      required
                      value={formData.PhoneNumber}
                      onChange={(value) =>
                        setFormData({ ...formData, PhoneNumber: value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    className="pb-1 flex flex-col font-lato text-lg font-normal"
                    htmlFor="Idea"
                  >
                    <span>What&apos;s your idea?</span>
                  </Label>
                  <Textarea
                    rows={5}
                    className="text-[16px] w-full md:text-[18px]"
                    id="Message"
                    name="Message"
                    required
                    placeholder="Tell us a bit about your project or what you're aiming to achieve, so we can better understand how to help bring your vision to life."
                    value={formData.Message}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setFormData({ ...formData, Message: e.target.value })
                    }
                  />
                </div>
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="text-md  group mt-5 flex border-2 border-textActive bg-textActive px-2 py-2 font-lato uppercase text-white hover:bg-transparent hover:text-textActive disabled:cursor-not-allowed disabled:opacity-50 md:px-5 md:text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <span className="animate-spin">
                      <LoaderCircle />
                    </span>
                    <span>Submitting...</span>
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
