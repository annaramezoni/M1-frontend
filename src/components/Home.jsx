import styles from "./Home.module.css";
export default function Home() {
  function handleImageChange() {}
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
      <nav className={styles.navbar2}>
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
      </nav>
      <main className={styles.main}>
        <div className={styles.imageInput}>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className={styles.vehicleTypeContainer}>
          <p>Your vehicle type is:</p>
          <p className={styles.vehicleTypeText}></p>
        </div>
      </main>
    </div>
  );
}
