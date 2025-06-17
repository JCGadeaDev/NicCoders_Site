"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const isFormComplete = 
  formData.firstname &&
  formData.lastname &&
  formData.email &&
  formData.phone &&
  formData.service &&
  formData.message;

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#1f1f24]">
      <div className="container max-w-4xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-4 md:p-10 bg-[#27272c] rounded-xl min-h-[950px] justify-center">
          <h3 className="text-2xl md:text-4xl font-bold text-accent">
            Let's work together
          </h3>
          <p className="text-white/70 text-sm md:text-lg leading-relaxed">
            Thank you for reaching out to us! Please fill out the form below
            with your contact information and message.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Input
              type="text"
              placeholder="Firstname"
              value={formData.firstname}
              onChange={handleChange("firstname")}
              className="text-sm md:text-lg px-4 py-3"
            />
            <Input
              type="text"
              placeholder="Lastname"
              value={formData.lastname}
              onChange={handleChange("lastname")}
               className="text-sm md:text-lg px-4 py-3"
            />
            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange("email")}
              className="text-sm md:text-lg px-4 py-3"
            />
            <Input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange("phone")}
              className="text-sm md:text-lg px-4 py-3"
            />
          </div>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full text-sm md:text-lg px-4 py-3">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-[#1f1f24] text-white border border-gray-600 rounded-md">
              <SelectGroup>
                <SelectItem value="web-dev">Web Development</SelectItem>
                <SelectItem value="app-dev">Mobile App Development</SelectItem>
                <SelectItem value="outsourcing">Outsourcing Partner</SelectItem>
                <SelectItem value="ux-design">UX Design</SelectItem>
                <SelectItem value="custom-software">Custom Software</SelectItem>
                <SelectItem value="desktop-dev">Desktop Apps</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Textarea
            className="h-[150px] md:h-[180px] text-sm md:text-lg px-4 py-3"
            placeholder="Type your message here."
            value={formData.message}
            onChange={handleChange("message")}
          />
          <Button
            type="submit"
            size="md"
            className="max-w-48 text-base md:text-lg py-4 px-6 self-start"
            disabled={loading || !isFormComplete}
          >
            {loading ? "Sending..." : sent ? "Sent!" : "Send Message"}
            
          </Button>
        </form>
      </div>
    </section>
  );
}
