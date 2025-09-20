import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  position: relative;

  label {
    display: flex;
    position: relative;
    font-size: 14px;
    cursor: pointer;
  }

  input {
    position: relative;
    height: 25px;
    width: 25px;
    cursor: pointer;
    appearance: none;
    border: 2px dotted #0081a7;
    border-radius: 50%;
    transition: all 0.2s;
    &:hover {
      background-color: #0077b6;
    }
    &:checked {
      background-color: #0077b6;
    }
  }

  div {
    pointer-events: none;
    position: absolute;
    padding: 2px 0 0 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.text};
    transition: opacity 0.2s;
    input:hover + & {
      color: #fff;
    }
    input:checked + & {
      color: #fff;
    }
  }
`;

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FormButtons = ({ value, name, handleChange, id }) => {
  return (
    <div>
      <ButtonWrapper>
        {numberArray.map((number) => (
          <InputWrapper key={`${number}-${name}`}>
            <label htmlFor={`${name}`}>
              <input
                id={id}
                name={`${name}`}
                type="radio"
                checked={number === value}
                value={number}
                onChange={() => handleChange(number)}
              />
              <div>{number}</div>
            </label>
          </InputWrapper>
        ))}
      </ButtonWrapper>
    </div>
  );
};

export default FormButtons;
