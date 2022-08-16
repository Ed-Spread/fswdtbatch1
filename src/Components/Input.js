import "./Input.css";
export default function Input() {
  return (
    <div class="container">
      <form class="d-flex" role="search">
        <input type="text" />
        &nbsp;&nbsp;&nbsp;
        <button class="btn btn-outline-success" type="search">
          Click
        </button>
      </form>
    </div>
  );
}
