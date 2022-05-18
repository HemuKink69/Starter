import "./style.css";

const hemu = "./assets/img/aman.png";
const debu = "./assets/img/joo.png";

export function Upfront() {
  return (
    <>
      <div class="ca">
        <h1 class="text1">
          {" "}
          What concerns you <br />
          about your health today?
        </h1>
        <img src={hemu} class="img" />
        <h2 class="text2">
          Check your symptoms and find out <br />
          what could be causing them. It's fast,
          <br /> free and anonymous.
        </h2>
        <button
          type="button"
          class="btn btn-primary position-relative"
          style={{ width: 220 }}
          class="button2"
        >
          <a href="chomu" class="button">
            Start
          </a>
        </button>
      </div>

      <div class="ca2">
        <h1 class="text3">
          {" "}
          Symptomate provides you with <br />a fast and accurate health <br />
          assessment
        </h1>
        <img src={debu} class="img2" />
        <h2 class="text4">
          <ol>
            <li>Enter your symptoms</li>
            <li>Answer some simple questions</li>
            <li>Done! Your assessment will reveal:
            <h3 class="text5">
          <ul>
            <li>possible causes of your symptoms</li>
            <li>options for next steps</li>
            <li>suggested lab tests</li>
          </ul>
        </h3>
            </li>
          </ol>
        </h2>
        
      </div>
    </>
  );
}
