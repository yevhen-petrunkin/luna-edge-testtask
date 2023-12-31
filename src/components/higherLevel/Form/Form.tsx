import cn from "classnames";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import toast, { Toaster } from "react-hot-toast";

import { useEffect, useState, useMemo, useCallback } from "react";

import { fetchPokemonByName } from "../../../utils/api";
import { normalizeTeamMemberFromData } from "../../../utils/helpers";

import titles from "../../../data/titles.json";
import form from "../../../data/form.json";
import modal from "../../../data/modal.json";

import { Title, Button, Input, Select, Modal, TeamBoard } from "../..";

import { InputT, OptionsT, TeamMemberDataT } from "../../../types";
import IFormProps from "./Form.props";

const Form: React.FC<IFormProps> = ({ options, className }) => {
  const data = useMemo(() => JSON.parse(JSON.stringify(form)), []);
  const FORM_DATA_KEY = "pokemon_session_data";
  const { cancel, save } = modal.buttons;

  const [teamMembers, setTeamMembers] = useState<OptionsT>([]);
  const [participants, setParticipants] = useState<TeamMemberDataT[]>([]);
  const [userData, setUserData] = useState<FieldValues>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSelectChange = (players: OptionsT) => {
    setTeamMembers(players);
  };

  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  const resolveCurrentSession = useCallback(
    (needSave: boolean) => {
      const notify = () => {
        needSave ? toast.success(save.message) : toast.error(cancel.message);
      };

      notify();
      setIsModalOpen(false);
      setTeamMembers([]);
      setParticipants([]);
      setUserData(undefined);
    },
    [toast, setIsModalOpen]
  );

  const {
    register,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FieldValues>();

  useFormPersist(FORM_DATA_KEY, { watch, setValue });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  const onSubmit: SubmitHandler<FieldValues> = async (
    formData: FieldValues
  ) => {
    setUserData(formData);

    try {
      if (teamMembers && teamMembers.length) {
        teamMembers.forEach((member) => {
          fetchPokemonByName(member.name)
            .then((memberData) => {
              if (memberData) {
                setParticipants((prev) => [
                  ...prev,
                  normalizeTeamMemberFromData(
                    memberData as any
                  ) as TeamMemberDataT,
                ]);
              }
            })
            .catch((err) => console.log(err))
            .finally(() => setIsModalOpen(true));
        });
        return;
      }

      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className={cn(
        "mx-auto my-4 p-4 sm:p-6 base:p-8 lg:p-10 xl:p-12 max-w-[600px] rounded-md border bg-accent-light",
        className
      )}
    >
      <Title text={titles.form} />
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <ul className="flex flex-col gap-4">
          {data.inputs.map((input: InputT) => {
            return (
              <li key={input.id}>
                <Input input={input} register={register} errors={errors} />
              </li>
            );
          })}
        </ul>

        {options && options.length > 0 ? (
          <Select
            selectData={data.select}
            options={options}
            changeHandler={handleSelectChange}
            className="mt-4"
            isModalOpen={isModalOpen}
          />
        ) : (
          ""
        )}
        <Button
          text={data.button.text}
          type="submit"
          size="lg"
          decorated
          className="mx-auto mt-4"
        />
      </form>
      <Toaster position="bottom-center" />

      {isModalOpen ? (
        <Modal clickHandler={closeModal}>
          <TeamBoard
            userData={userData}
            participants={participants}
            clickHandler={resolveCurrentSession}
          />
        </Modal>
      ) : (
        ""
      )}
    </section>
  );
};

export default Form;
