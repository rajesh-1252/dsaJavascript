type LabeledValue = {
  label: string;
};
function printLabel(label: LabeledValue) {
  console.log(label);
}
let myobj = { label: "dsafasd" };
printLabel(myobj);
