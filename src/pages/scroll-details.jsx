import React from "react";

export default function ScrollDetails() {
  return (
    <div class="container py-4">
      <h2 class="mb-4 ">Scroll Details View</h2>

      <div class="row">
        {/* <!-- Left Section --> */}
        <div class="col-md-3">
          {/* <!-- Employee Card --> */}
          <div class="card mb-4 shadow-sm">
            <div class="card-body card-custom">
              <h5 class="card-title">Mahesh M</h5>
              <h6 class="card-subtitle text-muted">Hubli</h6>
              <div class="divider"></div>
              <div class="d-flex align-items-center">
                <i class="bi bi-person-badge me-2"></i>{" "}
                <span>
                  Employee ID: <strong>1212</strong>
                </span>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-telephone me-2"></i>{" "}
                <span>+91 89348 38948</span>
              </div>
            </div>
          </div>

          {/* <!-- Uploaded Image --> */}
          <div class="mb-4">
            <label class="form-label">Uploaded Image</label>
            <img
              src="https://via.placeholder.com/200x200.png?text=Uploaded+Image"
              alt="Uploaded Image"
              class="preview-img"
            />
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div class="col-md-9">
          <div class="row mb-3">
            <div class="col-md-3">
              <span class="info-label">Scroll Number:</span>
              <br />
              <span class="info-value">1001</span>
            </div>
            <div class="col-md-3">
              <span class="info-label">No. of Receipts:</span>
              <br />
              <span class="info-value">5</span>
            </div>
            <div class="col-md-3">
              <span class="info-label">Date:</span>
              <br />
              <span class="info-value">2025-09-12</span>
            </div>
            <div class="col-md-3">
              <span class="info-label">Time:</span>
              <br />
              <span class="info-value">19:00</span>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-3">
              <span class="info-label">Remittance Date:</span>
              <br />
              <span class="info-value">2025-09-13</span>
            </div>
            <div class="col-md-3">
              <span class="info-label">Remittance Time:</span>
              <br />
              <span class="info-value">10:30</span>
            </div>
            <div class="col-md-3">
              <span class="info-label">Begin Receipt No:</span>
              <br />
              <span class="info-value">200</span>
            </div>
            <div class="col-md-3">
              <span class="info-label">End Receipt No:</span>
              <br />
              <span class="info-value">204</span>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
              <span class="info-label">Scroll Type:</span>
              <br />
              <span class="info-value">Manual</span>
            </div>
            <div class="col-md-4">
              <span class="info-label">App Types:</span>
              <br />
              <span class="info-value">Mobile</span>
            </div>
            <div class="col-md-4">
              <span class="info-label">Status:</span>
              <br />
              <span class="badge bg-success">Approved</span>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
              <span class="info-label">Receipt Scroll Type:</span>
              <br />
              <span class="info-value">Digital</span>
            </div>
            <div class="col-md-4">
              <span class="info-label">Challan No:</span>
              <br />
              <span class="info-value">789456</span>
            </div>
            <div class="col-md-4">
              <span class="info-label">Scroll Amount:</span>
              <br />
              <span class="info-value">₹12,500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
