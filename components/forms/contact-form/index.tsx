"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
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
    setIsSubmitting(true);
    e.preventDefault();

    const formPostData = new FormData();
    for (const key in formData) {
      // check for empty fields and return error toast elase append to formPostData
      if (formData[key as keyof FormData] === "") {
        toast({
          title: "Failed to submit form",
          description: "Please fill in all fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      } else {
        formPostData.append(key, formData[key as keyof FormData]);
      }
    }

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        body: formPostData,
      });

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
    <section className="relative z-20  max-w-7xl mx-auto">
      <Dialog open={openDownloadForm} onOpenChange={setOpenDownloadForm}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className=" w-full max-w-2xl rounded-2xl md:mx-auto">
          <DialogHeader className="flex flex-col items-center justify-center font-montserrat text-xl">
            <DialogTitle className="text-3xl pt-10 md:pt-2">
              Get in touch with us
            </DialogTitle>
            <DialogDescription className="md:text-md md:max-w-lg mx-auto px-4 text-center">
              We value your privacy and use your information solely to support
              efficient communication.
            </DialogDescription>
          </DialogHeader>
          <Card id="contact-us-dialog" className="border-0 shadow-none">
            <CardContent>
              <form className="form" onSubmit={handleSubmit}>
                <div className="space-y-8 md:space-y-5 ">
                  <div className="space-y-2 hidden">
                    <Label
                      className="pb-1 font-lato text-base md:text-lg font-normal"
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
                      className="pb-1 font-lato text-base md:text-lg font-normal"
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
                      className="pb-1 font-lato text-base md:text-lg font-normal"
                      htmlFor="FullName"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      autoFocus
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
                  <div className="grid  md:grid-cols-2 grid-cols-1  md:space-x-5 w-full  space-x-0 space-y-3 md:space-y-0">
                    <div className="space-y-2">
                      <Label
                        className="pb-1 font-lato text-base md:text-lg font-normal"
                        htmlFor="Email"
                      >
                        Email Address <span className="text-red-500">*</span>
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
                        className="pb-1 font-lato text-base md:text-lg font-normal"
                        htmlFor="PhoneNumber"
                      >
                        Phone Number <span className="text-red-500">*</span>
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
                      className="pb-1  flex  font-lato text-base md:text-lg font-normal"
                      htmlFor="Idea"
                    >
                      <span>What&apos;s your idea?</span>{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      rows={5}
                      className="text-[16px] w-full md:text-[18px] max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full  [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-purple-8  00"
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

                <DialogFooter className="flex flex-row md:pt-12 pt-10 items-center justify-between md:justify-end space-x-0  md:space-x-10 ">
                  <DialogClose asChild>
                    <button
                      type="button"
                      className="group text-md md:text-lg relative cursor-pointer p-2 w-32 border bg-transparent  border-gray-200 rounded-full overflow-hidden text-gray-200 text-center font-semibold disabled:cursor-not-allowed disabled:opacity-50 hover:bg-opacity-30 hover:bg-gray-400"
                    >
                      Close
                    </button>
                  </DialogClose>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="group text-md md:text-lg relative cursor-pointer p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
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
                    </span>
                    <div className="flex gap-2 text-white bg-green-400 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
                      <span>
                        {" "}
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
                      </span>
                    </div>
                  </button>
                </DialogFooter>
              </form>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </section>
  );
}
