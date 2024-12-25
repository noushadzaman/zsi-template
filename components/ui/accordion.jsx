"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { FaMinus, FaPlus } from "react-icons/fa6";

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("mb-2", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 gap-5 items-center [&[data-state=open]>#plus]:hidden [&[data-state=open]>#minus]:block py-4 transition-all text-left [&[data-state=open]]:bg-[#da9100] bg-[#f7f7f7] text-black/90 font-Montserrat font-[500] px-4",
        className
      )}
      {...props}>
      <FaPlus
        id="plus"
        fill="black"
        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      <FaMinus
        id="minus"
        fill="black"
        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 hidden" />
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down font-Mulish bg-[#f7f7f7] text-black/80 text-[18px]"
    {...props}>
    <div className={cn("py-4 px-4 pl-[50px]", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }