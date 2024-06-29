interface ChickBoxProps {
  onChange: (checked: boolean) => void;
  checked: boolean;
  register: any;
  id: string;
  content: string;
}


const ChickBox = ({ onChange, checked, register, id, content }: ChickBoxProps) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        className="mr-2"
        {...register}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="font-normal">
        {content}
      </label>
    </div>
  );
};


export default ChickBox
