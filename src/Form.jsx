function Form(props) {
  return props.pop ? (
    <div className="z-50 fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-700 bg-opacity-60">
      <div className="relative w-3/4 py-8 px-8 flex flex-col gap-4 bg-white rounded-md">
        <button
          className="absolute top-3 right-3"
          onClick={() => props.setPop(false)}
        >
          <img src="./down.png" alt="close-btn" className="w-5 h-5" />
        </button>
        <div className="flex flex-col gap-2 text-start">
          <label htmlFor="name" className="pl-2">
            Nama Lengkap
          </label>
          <div className="flex md:hidden">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="baris-full border-blue-600 border-2 p-2 rounded-md flex-grow"
            />
          </div>
          <div className="hidden md:flex md:flex-row md:gap-3">
            <input
              type="text"
              placeholder="Nama Depan"
              className="basis-1/2 rounded-md border-blue-600 border-2 p-2"
            />
            <input
              type="text"
              placeholder="Nama Belakang"
              className="basis-1/2 rounded-md border-blue-600 border-2 p-2"
            />
          </div>
        </div>
        <div className="flex">
          <select name="subject" id="subject" defaultValue={'Lainnya'}>
            <option value="default" hidden>
              Pilih Subjek Pesan
            </option>
            <option value="work">Pekerjaan</option>
            <option value="ask">Pertanyaan</option>
            <option value="others">
              Lainnya
              <input type="text" placeholder="Isi sendiri..." />
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2 text-start">
          <label htmlFor="messege" className="pl-2">
            Pesan
          </label>
          <textarea
            name="pesan"
            id="messege"
            cols="30"
            rows="10"
            placeholder="Ketik di sini."
            className="p-2 border-blue-600 border-2 rounded-md flex-grow"
          ></textarea>
        </div>
        <div className="flex flex-row gap-1">
          <input type="checkbox" name="validation" id="valid" />
          <label htmlFor="validation">Apakah sudah benar?</label>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="border-2 border-blue-600 text-blue-600 p-2 rounded-md transition-transform hover:scale-105 hover:shadow-sm hover:shadow-blue-400"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default Form;
