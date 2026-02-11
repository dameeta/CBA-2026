const CardChildren = ({ children }) => {
  return (
    <div style={styles.card}>
      {children}
    </div>
  );
}

const styles = {
  card:{ 
    width:"300px", padding:"15px", borderRadius:"12px",display:"inline-block", margin:"15px", 
    boxShadow:"0 4px 10px  rgba(0, 0, 0, 0.15)",
    backgroundColor: "#fff", 
    textAlign:"center" },};


export default CardChildren;