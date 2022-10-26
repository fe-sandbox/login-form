import React from "react";
import * as CH from "@chakra-ui/react";
import * as LD from "./duck";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as LC from "./components";

const Form: React.FC<LD.formTypes.FormProps> = ({
  children,
  onSubmit,
  defaultValues,
  schema,
  ...rest
}) => {
  const formProvider = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...formProvider}>
      <CH.Box
        as="form"
        {...rest}
        onSubmit={formProvider.handleSubmit(onSubmit)}
      >
        {children}
      </CH.Box>
    </FormProvider>
  );
};

type InternalFormType = typeof Form;

interface ExternalFormType extends InternalFormType {
  Controls: typeof LC.FormControls;
}

const ExportForm = Form as ExternalFormType;
ExportForm.Controls = LC.FormControls;

export default ExportForm;
