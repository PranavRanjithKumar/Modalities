import React from "react";
import "../App.css";
import Input from "./Input";
import Button from "./Button";
import useInput from "../hooks/useInput";

const bodySections = [
  "Brain & Skull",
  "Chest",
  "Abdomen",
  "Extremities (Others)",
];

const modalites = ["X-ray", "Ultrasound", "CT", "MRI"];

const views = [
  "AP Supine",
  "KUB",
  "PA Erect",
  "Others - Lateral",
  "Others - PA Prone",
];

const InputSection = ({ showSection }) => {
  const [bodyPartsValue, bodyPartsProps] = useInput();
  const [modalitiesValue, modalitiesProps] = useInput();
  const [viewsValue, viewsProps] = useInput();

  let formIsValid;
  if (modalitiesProps.value === "X-Ray")
    formIsValid =
      bodyPartsValue.isValid && modalitiesValue.isValid && viewsValue.isValid;
  else formIsValid = bodyPartsValue.isValid && modalitiesValue.isValid;

  const onButtonClickHandler = (event) => {
    if (!formIsValid) return;
    showSection();
  };

  return (
    <>
      <div className="inputSection">
        <Input
          label="Sections of Body"
          methods={bodyPartsProps}
          options={bodySections}
          disabled={false}
        />

        <Input
          label="Modalities"
          methods={modalitiesProps}
          options={modalites}
          disabled={bodyPartsProps.value.trim().length === 0}
        />

        {modalitiesValue.isValid && modalitiesProps.value === "X-ray" && (
          <Input
            label="Views"
            disabled={false}
            methods={viewsProps}
            options={views}
          />
        )}
      </div>
      <Button onClick={onButtonClickHandler} />
    </>
  );
};

export default InputSection;
