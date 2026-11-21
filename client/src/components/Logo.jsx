function Logo({ size = 46, showText = true, light = false }) {
  return (
    <div className={`school-brand ${light ? "brand-light" : ""}`}>
      <img
        src="/idsc-logo.png"
        alt="Infotech Development Systems College logo"
        className="school-logo-image"
        style={{
          width: size,
          height: size
        }}
      />

      {showText && (
        <div className="school-brand-text">
          <strong>INFOTECH</strong>
          <span>DEVELOPMENT SYSTEMS COLLEGE</span>
          <small>STUDENT PORTAL</small>
        </div>
      )}
    </div>
  );
}

export default Logo;