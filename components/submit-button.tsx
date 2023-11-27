import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from "react-dom";


export default function SubmitButton() {
    const { pending } = useFormStatus();

  return (
    <button
      className=" flex items-center justify-center gap-2 text-white bg-black/50 border transition-all duration-300
       border-white/10 hover:border-white/25 h-[3rem] w-[8rem] rounded-md outline-none disabled:hover:border-none disabled:cursor-not-allowed disabled:bg-opacity-50 disabled:border-opacity-50 disabled:text-opacity-50"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit <FaPaperPlane className="text-xs opacity-70" />{" "}
        </>
      )}
    </button>
  );
}
