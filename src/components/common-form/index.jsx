import { Button } from "../ui/button";
import FormControls from "./form-controls";

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false,
  loading
}) {
  return (
    <form onSubmit={handleSubmit}>
      {/* render form controls here */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      {loading ? (
        <Button disabled type="button" className="mt-5 w-full">
          Loading...
        </Button>
      ) : (
        <Button disabled={isButtonDisabled} type="submit" className="mt-5 w-full">
          {buttonText || "Submit"}
        </Button>
      )}
      
    </form>
  );
}

export default CommonForm;
