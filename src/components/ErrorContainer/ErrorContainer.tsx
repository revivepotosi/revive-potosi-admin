import { Button } from 'primereact/button';
import { Props, defaultProps } from './types';

const ErrorContainer = ({ title, subtitle, buttons, iconClassName }: Props) => {
    const hasButtons = Array.isArray(buttons) && buttons.length > 0;
    const getButtons = () => {
        if (!hasButtons) return null;
        return buttons.map((button) => {
            const { label, severity, outlined, text, raised, link, onClick } =
                button;
            return (
                <Button
                    key={label}
                    label={label}
                    severity={severity}
                    outlined={outlined}
                    text={text}
                    raised={raised}
                    link={link}
                    onClick={onClick}
                />
            );
        });
    };
    return (
        <main className="bg-login bg-center bg-no-repeat bg-cover min-h-screen flex justify-center items-center">
            <div className="w-80 md:w-96 p-6 bg-gradient-to-tl from-blue-950 to-sky-900 rounded-lg mt-6 md:mt-0 mb-6 md:mb-0 flex justify-center flex-col">
                <div className="flex justify-center">
                    <div className="bg-sky-100 p-4 rounded-full">
                        <i
                            className={`pi pi-check pi-times-circle text-8xl text-rose-600 ${iconClassName}`}
                        />
                    </div>
                </div>
                <h1 className="text-white text-xl font-medium tracking-wide text-center pt-10 pb-4">
                    {title}
                </h1>
                <p className="text-white text-md font-medium tracking-wide text-center pb-10">
                    {subtitle}
                </p>
                {hasButtons ? (
                    <div className="flex flex-col gap-4">{getButtons()}</div>
                ) : null}
            </div>
        </main>
    );
};

ErrorContainer.defaultProps = defaultProps;

export default ErrorContainer;
