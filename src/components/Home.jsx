import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:3000/";

export default function Home() {
  const [vehicleType, setVehicleType] = useState("");
  const [probability, setProbability] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  async function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    setPreviewUrl(URL.createObjectURL(file)); // show the image immediately

    const formData = new FormData();
    formData.append("image", file); // must match upload.single("image")

    setLoading(true);
    setError("");
    setVehicleType("");

    try {
      const res = await fetch(API_URL, { method: "POST", body: formData });
      if (!res.ok) throw new Error("Classification failed");
      const data = await res.json();
      setVehicleType(data["Vehicle Type"]);
      setProbability((data.Probability * 100).toFixed(0));
    } catch (err) {
      setError("Could not classify the image. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <nav className={styles.navbar1}>
        <img src="./images/logo.png" alt="Turners'logo" />
        <div className={styles.loginContainer}>
          <FontAwesomeIcon icon={faUser} />
          <a>LOGIN</a>
          <span>
            <i>OR</i>
          </span>
          <a>REGISTER</a>
        </div>
      </nav>
      <nav className={styles.navbar2}></nav>
      {/* ============ MAIN =========== */}
      <main className={styles.main}>
        <h2>Find out your car type</h2>
        <div className={styles.vehicleWrapper}>
          <div className={styles.imageInput}>
            <div style={{ marginTop: "1rem" }}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <label htmlFor="carImage" className={styles.uploadButton}>
                Please, choose a photo of the car showing its full body
              </label>
            </div>
            <input
              id="carImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Uploaded vehicle"
                className={styles.preview}
              />
            )}
          </div>
          <div className={styles.vehicleTypeContainer}>
            <p>Your vehicle type is:</p>
            <p className={styles.vehicleTypeText}>
              {loading ? "Analysing..." : error || vehicleType}
            </p>
            <p>With the probability of:</p>
            <p className={styles.vehicleTypePercentage}>
              {probability && `${probability}%`}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
