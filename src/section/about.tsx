export const About = () => {
  return (
    <div
      className="ABOUT"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "90vw",
        maxWidth: "600px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: "WDXL Lubrifont JP N, sans-serif",
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "24px",
          padding: "20px",
        }}
      >
        ABOUT
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          style={{
            width: "50%",
            borderRadius: "50%",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
          src={`${process.env.PUBLIC_URL}/about/profile_photo.jpg`}
          alt="my-photo"
        />
      </div>
      <div className="name" style={{ width: "100%" }}>
        フルサーワ
      </div>
      <div>
        最近やっと野菜が美味しく食べられるようになってきた。粘土をこねてみたり、酒を飲んでみたりと自由な生活を送っている。
        好きな技はメシアライザー(全体回復、状態異常も治す)、べノンザッパー(敵全体に物理攻撃、確率で毒を付与)。なんか名前がかっこいいので。全体技なのもポイントが高い。
        髪型はデフォルトが坊主だがたまに伸ばすこともある。暖房に弱い。
      </div>
    </div>
  );
};
