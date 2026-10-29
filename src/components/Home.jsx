import styles from "./Home.module.css";
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
          <fa-icon _ngcontent-ng-c473387464="" class="ng-fa-icon pr-2" ngh="1">
            <svg
              data-prefix="fas"
              data-icon="user"
              className="svg-inline--fa fa-user fa-undefined fa-pull-undefined"
              role="img"
              viewBox="0 0 448 512"
              aria-hidden="true"
              style={{ width: "1rem", height: "1rem" }}>
              <path
                fill="currentColor"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"></path>
            </svg>
          </fa-icon>
          <a>LOGIN</a>
          <span>
            <i>OR</i>
          </span>
          <a>REGISTER</a>
        </div>
      </nav>
      <nav className={styles.navbar2}></nav>
      <main className={styles.main}>
        <div className={styles.imageInput}>
          <fa-icon
            _ngcontent-ng-c473387464=""
            size="xs"
            className="ng-fa-icon pr-2"
            ngh="1">
            <svg
              data-prefix="fas"
              data-icon="magnifying-glass"
              className="svg-inline--fa fa-magnifying-glass fa-xs fa-pull-undefined"
              role="img"
              viewBox="0 0 512 512"
              aria-hidden="true"
              style={{ width: "1rem", height: "1rem" }}>
              <path
                fill="currentColor"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
            </svg>
          </fa-icon>
          <input type="file" accept="image/*" onChange={handleImageChange} />
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
          <p>{probability} %</p>
        </div>
      </main>
    </div>
  );
}
