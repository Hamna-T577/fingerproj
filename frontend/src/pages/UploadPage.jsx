import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/upload.css";

function UploadPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handlePredict = async () => {
    if (!image) return alert("Please upload a fingerprint image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/predict/",
        formData
      );

      navigate("/result", {
        state: { bloodGroup: response.data.blood_group },
      });
    } catch (err) {
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card">

        <h1>Get your Results</h1>
        <p className="subtitle">
          New way of detecting blood group using fingerprint
        </p>

        <div className="upload-box">
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {preview && (
          <div className="preview-box">
            <img src={preview} alt="Fingerprint preview" />
          </div>
        )}

        <button onClick={handlePredict} disabled={loading}>
          {loading ? "Predicting..." : "Predict Blood Group"}
        </button>

      </div>
    </div>
  );
}

export default UploadPage;
