import { FC } from "react";
import styled from "styled-components";
import { Plus, Trash } from "lucide-react";
import { JButton, JInput } from "../../../shared/ui";

type CreateBoardFormProps = {
  setIsModalOpen: () => void;
  isEdit?: boolean;
  boardName: string;
  handleBoardName: (value: string) => void;
  handleSubmit: () => void;
};

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ControlsStyled = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

export const CreateBoardForm: FC<CreateBoardFormProps> = ({
  setIsModalOpen,
  isEdit = false,
  boardName,
  handleBoardName,
  handleSubmit,
}) => {
  return (
    <FormStyled action={handleSubmit}>
      <JInput
        value={boardName}
        onChange={(e) => handleBoardName(e.target.value)}
        placeholder={"Название доски..."}
      />
      <ControlsStyled>
        {isEdit && (
          <JButton
            label={"Удалить"}
            icon={<Trash size={16} />}
            onClick={() => {
              setIsModalOpen();
              handleBoardName("");
            }}
          />
        )}
        <JButton
          label={`${isEdit ? "Обновить" : "Создать"}`}
          type="submit"
          outlined
          full
          icon={<Plus size={16} />}
        />
      </ControlsStyled>
    </FormStyled>
  );
};
