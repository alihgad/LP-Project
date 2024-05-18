"use client"

import { Checkbox } from "@/components/ui/checkbox"

export default function ChickBox({id , content}:{
    id:string,
    content:string
}) {
  return (
    <div className="flex items-center space-x-2 my-2">
      <Checkbox id={`${id}`} />
      <label
        htmlFor={`${id}`}
        className="text-base font-medium text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {content}
      </label>
    </div>
  )
}
