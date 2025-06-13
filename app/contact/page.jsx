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

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#1f1f24]">
      <div className="container max-w-3xl mx-auto px-4">
        <form className="flex flex-col gap-6 p-6 md:p-8 bg-[#27272c] rounded-xl">
          <h3 className="text-3xl md:text-4xl text-accent">
            Let's work together
          </h3>
          <p className="text-white/60 text-sm md:text-base">
            Thank you for reaching out to us! Please fill out the form below
            with your contact information and message.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Firstname"
              value={formData.firstname}
              onChange={handleChange("firstname")}
            />
            <Input
              type="text"
              placeholder="Lastname"
              value={formData.lastname}
              onChange={handleChange("lastname")}
            />
            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange("email")}
            />
            <Input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange("phone")}
            />
          </div>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="max-h-40 overflow-y-auto">
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
            className="h-[160px]"
            placeholder="Type your message here."
            value={formData.message}
            onChange={handleChange("message")}
          />
          <Button
            type="button"
            size="md"
            className="max-w-40 self-start"
            disabled
          >
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}
