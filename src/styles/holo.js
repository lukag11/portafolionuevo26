<div style={{ position: "relative", width: "180px", height: "180px" }}>
  {/* El anillo que gira */}
  <AvatarBox />

  {/* La imagen estática en el centro */}
  <div
    style={{
      position: "absolute",
      top: "10px",
      left: "10px",
      right: "10px",
      bottom: "10px",
      overflow: "hidden",
      borderRadius: "50%",
    }}
  >
    <AvatarImg
      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      alt="Luca Giobanelli"
    />
  </div>
</div>;
