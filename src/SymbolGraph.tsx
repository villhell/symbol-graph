const btnRead_Click = (e: any) => {
  alert(e.target.value);
};
export const SymbolGraph = () => {
  return (
    <div>
      <h1>Symbol Graph</h1>
      <label>address:</label>
      <input type="text" id="address" name="address" required />
      <input type="button" value="Read" onClick={btnRead_Click} />
    </div>
  );
};
