"use client"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors, isSubmitting},
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            country: "India",
            investmentGoals: "Growth",
            riskTolerance: "Medium",
            preferredIndustry: "Technology"
        },
        mode: 'onBlur'
    });

    const onSubmit = async (data: SignUpFormData) => {
        try {
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <h1 className="form-title">Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/*Some inputs will be added here*/}
                <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="Egoista Racer"
                    register={register}
                    error={errors.fullName}
                    validation={{required: "Full name is required", minLength: 2}}
                />

                <InputField
                    name="email"
                    label="Email"
                    placeholder="egoistaracer@example.com"
                    register={register}
                    error={errors.email}
                    validation={{required: "Email is required", pattern: /^\w+@\w+\.\w+$/, message: "Email address is required" }}
                />

                <InputField
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter a strong password"
                    register={register}
                    error={errors.password}
                    validation={{required: "Password is required", minLength: 8}}
                />
                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? "Creating your account..." : "Start your investment journey"}
                </Button>
            </form>
        </>
    );
};

export default SignUp;