import Keyboard from "../lib";
import "./css/FullKeyboardDemo.css";

const setDOM = () => {
  document.querySelector("body").innerHTML = `
    <input class="input" placeholder="Tap on the virtual keyboard to start" />
    <div class="keyboardContainer">
      <div class="simple-keyboard-main"></div>
    </div>
  `;
};

class Demo {
  constructor() {
    setDOM();

    /**
     * Demo Start
     */
    const commonKeyboardOptions = {
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      theme: "simple-keyboard hg-theme-default hg-layout-default",
      physicalKeyboardHighlight: true,
      syncInstanceInputs: true,
      mergeDisplay: true,
      debug: false,
      physicalKeyboardHighlightPreventDefault: true
    };

    this.keyboard = new Keyboard(".simple-keyboard-main", {
      ...commonKeyboardOptions,
      layout: {
        default: [
          "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12} {home} {end} {insert} {delete}",
          "^ 1 2 3 4 5 6 7 8 9 0 ß ´ {backspace}",
          "{tab} q w e r t z u i o p ü +",
          "{capslock} a s d f g h j k l ö ä # {enter}",
          "{shiftleft} y x c v b n m , . - {shiftright}",
          "{controlleft} {fn} {metaleft} {altleft} {space} {altgraph} {controlright} {pageup} {arrowup} {pagedown}",
          "{arrowleft} {arrowdown} {arrowright}"
        ],
      },
      display: {
        "{escape}": "Esc",
        "{tab}": "⇥",
        "{backspace}": "⌫",
        "{enter}": "↵",
        "{capslock}": "⇩",
        "{shiftleft}": "⇧",
        "{shiftright}": "⇧",
        "{controlleft}": "Strg",
        "{fn}": "Fn",
        "{controlright}": "Strg",
        "{altleft}": "Alt",
        "{altright}": "alt ⌥",
        "{metaleft}": "⊞",
        "{metaright}": "⊞",
        "{f1}": "F1",
        "{f2}": "F2",
        "{f3}": "F3",
        "{f4}": "F4",
        "{f5}": "F5",
        "{f6}": "F6",
        "{f7}": "F7",
        "{f8}": "F8",
        "{f9}": "F9",
        "{f10}": "F10",
        "{f11}": "F11",
        "{f12}": "F12",
        "{home}": "Pos 1",
        "{end}": "Ende",
        "{insert}": "Einfg",  
        "{delete}": "Entf",
        "{altgraph}": "AltGr",
        "{pageup}": "Seite↑",
        "{pagedown}": "Seite↓"
      }
    });

    /*

    this.keyboardControlPad = new Keyboard(".simple-keyboard-control", {
      ...commonKeyboardOptions,
      layout: {
        default: [
          "{prtscr} {scrolllock} {pause}",
          "{insert} {home} {pageup}",
          "{delete} {end} {pagedown}"
        ]
      }
    });

    this.keyboardArrows = new Keyboard(".simple-keyboard-arrows", {
      ...commonKeyboardOptions,
      layout: {
        default: ["{arrowup}", "{arrowleft} {arrowdown} {arrowright}"]
      }
    });

    this.keyboardNumPad = new Keyboard(".simple-keyboard-numpad", {
      ...commonKeyboardOptions,
      layout: {
        default: [
          "{numlock} {numpaddivide} {numpadmultiply}",
          "{numpad7} {numpad8} {numpad9}",
          "{numpad4} {numpad5} {numpad6}",
          "{numpad1} {numpad2} {numpad3}",
          "{numpad0} {numpaddecimal}"
        ]
      }
    });

    this.keyboardNumPadEnd = new Keyboard(".simple-keyboard-numpadEnd", {
      ...commonKeyboardOptions,
      layout: {
        default: ["{numpadsubtract}", "{numpadadd}", "{numpadenter}"]
      }
    });
    */

    document.querySelector(".input").addEventListener("input", () => {
      const input = document.querySelector(".input").value;
      this.keyboard.setInput(input);
    });
  }

  onChange(input) {
    document.querySelector(".input").value = input;
    this.keyboard.setInput(input);

    console.log("🔴 Input changed", input);
  }

  onKeyPress(button) {
    console.log("💙 Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (
      button === "{shift}" ||
      button === "{shiftleft}" ||
      button === "{shiftright}" ||
      button === "{capslock}"
    )
      this.handleShift();
  }

  handleShift() {
    const currentLayout = this.keyboard.options.layoutName;
    const shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  }
}

export default Demo;
