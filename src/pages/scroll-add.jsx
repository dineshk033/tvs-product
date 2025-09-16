import React from "react";

export default function ScrollAdd() {
  const [formData, setFormData] = React.useState({
    id: 0,
    noReceipts: 0,
    depositDate: "",
    time: "",
    amount: 0,
    status: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="container py-4">
      <h2 className="mb-4 ">
        <i className="bi bi-file-earmark-text me-2"></i>Scroll Details
      </h2>

      <div className="row">
        {/* <!-- Left Section (25%) --> */}
        <div className="col-md-3">
          {/* <!-- Card Info --> */}
          <div className="card mb-4 shadow-sm">
            <div className="card-body card-custom">
              <h5 className="card-title">Mahesh M</h5>
              <h6 className="card-subtitle text-muted">Hubli</h6>
              <div className="divider"></div>
              <div className="d-flex align-items-center">
                <i className="bi bi-person-badge me-2"></i> <span>1212</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone me-2"></i>{" "}
                <span>+91 89348 38948</span>
              </div>
            </div>
          </div>

          {/* <!-- Image Upload --> */}
          <div className="mb-4">
            <label for="imageUpload" className="form-label">
              Upload Image
            </label>
            <input
              className="form-control"
              type="file"
              id="imageUpload"
              accept="image/*"
            />
            <img
              id="preview"
              className="preview-img d-none"
              alt="Uploaded Image Preview"
            />
          </div>
        </div>

        {/* <!-- Right Section (75%) --> */}
        <div className="col-md-9">
          <form>
            {/* <!-- Row 1 --> */}
            <div className="row form-section">
              <div className="col-md-3">
                <label className="form-label">Scroll Number</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.id}
                  name="id"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">No. of Receipts</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.noReceipts}
                  name="noReceipts"
                  onChange={handleChange}
                />
              </div>
              {/* <div className="col-md-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Time</label>
                <input type="time" className="form-control" />
              </div> */}
            </div>

            {/* <!-- Row 2 --> */}
            <div className="row form-section">
              <div className="col-md-3">
                <label className="form-label">Remittance Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={formData.depositDate}
                  name="depositDate"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Remittance Time</label>
                <input
                  type="time"
                  className="form-control"
                  value={formData.time}
                  name="time"
                  onChange={handleChange}
                />
              </div>
              {/* <div className="col-md-3">
                <label className="form-label">Begin Receipt No</label>
                <input type="number" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">End Receipt No</label>
                <input type="number" className="form-control" />
              </div> */}
            </div>

            {/* <!-- Row 3 --> */}
            <div className="row form-section">
              {/* <div className="col-md-4">
                <label className="form-label">Scroll Type</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">App Types</label>
                <input type="text" className="form-control" />
              </div> */}
              <div className="col-md-4">
                <label className="form-label">Status</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.status}
                  name="status"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* <!-- Row 4 --> */}
            <div className="row form-section">
              {/* <div className="col-md-4">
                <label className="form-label">Receipt Scroll Type</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Challan No</label>
                <input type="number" className="form-control" />
              </div> */}
              <div className="col-md-4">
                <label className="form-label">Scroll Amount</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.amount}
                  name="amount"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
