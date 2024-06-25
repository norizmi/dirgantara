import ButtonForm from "../Elements/Form/ButtonForm";
import Form from "../Elements/Form/Form";

function FormView() {
  return (
    <>
      <div className="flex flex-col gap-9 justify-center items-center text-black font-sans mb-20">
        <Form type="text" placeholder="Masukkan Nama" />
        <Form type="email" placeholder="Email" />
        <Form type="text" placeholder="Nomor telepon" />
        <textarea
          className="rounded-xl p-5 pl-9 w-[342px] h-[174px] border border-neutral-900 bg-[#F0F0F0]"
          placeholder="Masukkan pertanyaanmu"
        ></textarea>
        <ButtonForm />
      </div>
    </>
  );
}

export default FormView;
