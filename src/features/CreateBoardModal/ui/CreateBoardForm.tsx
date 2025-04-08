import { FC } from "react";
import styled from "styled-components";
import { Plus, Trash } from "lucide-react";
import { JButton, JInput } from "../../../shared/ui";
import { useForm } from "react-hook-form";

export type BoardFormInputs = {
  boardName: string;
};

interface CreateBoardFormProps {
  setIsModalOpen: () => void;
  onSubmit: (data: BoardFormInputs) => void;
}

interface WithEditProps extends CreateBoardFormProps {
  isEdit: true;
  boardName: string;
  handleDeleteBoard: () => void;
}

interface NonEditProps extends CreateBoardFormProps {
  isEdit?: false;
  boardName?: string;
  handleDeleteBoard?: never;
}

type CreateBoardProps = WithEditProps | NonEditProps;

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

const ErrorStyled = styled.p`
  color: red;
  font-size: 12px;
`;

export const CreateBoardForm: FC<CreateBoardProps> = ({
  setIsModalOpen,
  isEdit,
  boardName,
  onSubmit,
  handleDeleteBoard,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<BoardFormInputs>({
    defaultValues: {
      boardName: boardName || "",
    },
    mode: "onBlur",
  });

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <JInput
        {...register("boardName", { required: "Название обязательно" })}
        placeholder={"Название доски..."}
        isError={!isValid}
      />
      {!isValid && <ErrorStyled>{errors?.boardName?.message}</ErrorStyled>}
      <ControlsStyled>
        {isEdit && (
          <JButton
            label={"Удалить"}
            icon={<Trash size={16} />}
            onClick={() => {
              setIsModalOpen();
              handleDeleteBoard();
            }}
          />
        )}
        <JButton
          label={`${isEdit ? "Обновить" : "Создать"}`}
          type="submit"
          outlined
          full
          icon={<Plus size={16} />}
          disabled={!isDirty || !isValid}
        />
      </ControlsStyled>
    </FormStyled>
  );
};
