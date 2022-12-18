const ChangePassword:React.FC = () => {
    return(
        <div className=" flex-1 h-full">
            <h1 className="text-[#0D141A] text-[2rem] font-semibold text-center">Change Password</h1>
            <form>
                <label htmlFor="" className="flex flex-col gap-[1.2rem] text-[#2E3236]">
                    <input type="text" className="border border-[#2E3236] rounded-lg" />
                </label>
            </form>
        </div>
    )
}

export default ChangePassword