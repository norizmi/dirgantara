/* eslint-disable react/prop-types */
function Form(props) {

    const {type, placeholder} = props

  return (
    <>
        <div>
            <input type={type} placeholder={placeholder} className="rounded-full w-[342px] h-[56px] p-5 pl-9 border border-neutral-900 bg-[#F0F0F0]" required/>
        </div>
    </>
  )
}

export default Form
