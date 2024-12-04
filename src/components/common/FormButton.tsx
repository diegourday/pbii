import LoaderIcon from "@/icons/Loader";
import SendIcon from "@/icons/Send";

interface FormButtonProps {
  isSubmitting: boolean;
  className?: string;
  color?: string;
}

export default function FormButton({
  isSubmitting,
  className,
  color = "primary",
}: FormButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`flex h-12 items-center justify-center gap-1.5 rounded-md bg-${color} px-6 text-white transition ${isSubmitting ? "opacity-50" : `hover:bg-${color}-dark hover:scale-[1.03] active:scale-100`} ${className}`}
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
