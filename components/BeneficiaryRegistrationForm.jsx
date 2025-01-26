"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function BeneficiaryRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [submitStatus, setSubmitStatus] = useState(null)

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://saylani-management-production.up.railway.appapi/beneficiaries/createBeneficiary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        setSubmitStatus({ type: "success", message: `Beneficiary registered successfully. Token: ${result.token}` })
        reset()
      } else {
        const errorData = await response.json()
        setSubmitStatus({ type: "error", message: errorData.error || "Failed to register beneficiary" })
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "An error occurred while submitting the form" })
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Beneficiary Registration Form</CardTitle>
        <CardDescription>Enter the beneficiary's details below</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="cnic">CNIC</Label>
            <Input
              id="cnic"
              {...register("cnic", {
                required: "CNIC is required",
                pattern: {
                  value: /^\d{13}$/,
                  message: "CNIC must be 13 digits",
                },
              })}
            />
            {errors.cnic && <p className="text-red-500 text-sm mt-1">{errors.cnic.message}</p>}
          </div>

          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name", { required: "Name is required" })} />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              {...register("phone", {
                pattern: {
                  value: /^(\+92|0)?3\d{9}$/,
                  message: "Invalid phone number format",
                },
              })}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register("address", { required: "Address is required" })} />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
          </div>

          <div>
            <Label htmlFor="purpose">Purpose</Label>
            <Select id="purpose" {...register("purpose", { required: "Purpose is required" })}>
              <option value="">Select a purpose</option>
              <option value="Financial Aid">Financial Aid</option>
              <option value="Medical Assistance">Medical Assistance</option>
              <option value="Education Support">Education Support</option>
            </Select>
            {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>}
          </div>

          <div>
            <Label htmlFor="department">Department</Label>
            <Input id="department" {...register("department", { required: "Department is required" })} />
            {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department.message}</p>}
          </div>

          <Button type="submit" className="w-full">
            Register Beneficiary
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {submitStatus && (
          <Alert variant={submitStatus.type === "success" ? "default" : "destructive"} className="w-full">
            <AlertTitle>{submitStatus.type === "success" ? "Success" : "Error"}</AlertTitle>
            <AlertDescription>{submitStatus.message}</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  )
}

