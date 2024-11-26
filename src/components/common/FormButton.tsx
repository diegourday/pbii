import LoaderIcon from "@/icons/Loader";
import SendIcon from "@/icons/Send";

interface FormButtonProps {
  isSubmitting: boolean;
  className?: string;
}

export default function FormButton({
  isSubmitting,
  className,
}: FormButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`flex h-12 items-center justify-center gap-1.5 rounded-md bg-primary px-6 text-white transition ${isSubmitting ? "opacity-50" : "hover:scale-[1.03] hover:bg-primary-dark active:scale-100"} ${className}`}
    >
      {isSubmitting ? (
        <>
          <p>Cargando...</p>
          <LoaderIcon className="size-5 animate-spin" />
        </>
      ) : (
        <>
          <SendIcon className="size-5" />
          Enviar Mensaje
        </>
      )}
    </button>
  );
}
