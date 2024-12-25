'use client';

import { loginUser } from "@/lib/slices/UserSlice";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const Form = () => {
    const { loading, error, user } = useSelector((state => state.user));
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    
    const onSubmit = (data) => {
        dispatch(loginUser(data)).then(res => {
            if (res?.payload?.token) {
                toast(`Logged in successfully as ${res?.payload?.user?.name}`);
                console.log(res?.payload?.user);
            } else {
                toast(res?.payload?.message);
                console.log(res?.payload?.message);
            }
        })
    }
    console.log(user);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start space-y-3">
            <input placeholder="Email" className="border border-yellow-400 w-full py-[5px] px-[35px] text-[15px] leading-[40px]" type="email" {...register("email", { required: true, minLength: 4, maxLength: 50 })} />
            <input placeholder="Password" className="border border-yellow-400 w-full py-[5px] px-[35px] text-[15px] leading-[40px]" type="text" {...register("password", { required: true, minLength: 4, maxLength: 50 })} />
            <input type="submit" className="bg-black text-white py-[5px] px-[35px] font-[600] text-[15px] leading-[40px] hover:text-black hover:bg-[#da9100] cursor-pointer transition-colors duration-300  mt-[35px] w-full" />
        </form>
    )
}

export default Form