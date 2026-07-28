function Phone() {

  return (

    <div className="container py-5">

      <h2 className="text-center mb-4">
        Contact Us
      </h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter Name"
      />

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Enter Email"
      />

      <textarea
        className="form-control mb-3"
        placeholder="Message"
      ></textarea>

      <button className="btn btn-primary">
        Send
      </button>

    </div>

  );
}

export default Phone;