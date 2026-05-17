import React from "react"

export default function LoadingScreen({ hidden = false, inline = false }) {
  if (inline) {
    return (
      <div className="grid place-items-center bg-primary-900 py-16">
        <div className="loading-screen__mark loading-screen__mark--inline">
          <div className="loading-screen__brand">
            <img
              src="/logo.png"
              alt="Kellon"
              className="loading-screen__logo"
              width="48"
              height="48"
            />
            <div className="loading-screen__title">Kellon</div>
          </div>
          <div className="loading-screen__bar" aria-hidden="true" />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`loading-screen ${hidden ? "loading-screen--hidden" : ""}`}
      aria-hidden={hidden}
      role="status"
      aria-live="polite"
      aria-label="Loading Kellon"
    >
      <div className="loading-screen__grid" aria-hidden="true" />
      <div className="loading-screen__mark">
        <div className="loading-screen__brand">
          <img
            src="/logo.png"
            alt=""
            className="loading-screen__logo"
            width="48"
            height="48"
          />
          <div className="loading-screen__title">Kellon</div>
        </div>
        <div className="loading-screen__bar" aria-hidden="true" />
      </div>
    </div>
  )
}
