/**
 * @author WMXPY
 * @description Satori
 */

export type SudosaurusIconSatoriProps = {

    readonly size: number;
};

export const SudosaurusIconSatori: React.FC<SudosaurusIconSatoriProps> = (
    props: SudosaurusIconSatoriProps,
) => {

    return (<div
        style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: props.size / 4,
            fontFamily: "font",
        }}
    >
        <div
            style={{
                display: "flex",
                gap: props.size / 20,
            }}
        >
            <div>S</div>
            <div>U</div>
            <div>D</div>
            <div>O</div>
        </div>
        <div
            style={{
                display: "flex",
                gap: props.size / 20,
            }}
        >
            <div>S</div>
            <div>A</div>
            <div>U</div>
            <div
                style={{
                    bottom: props.size / 32,
                }}
            >_</div>
        </div>
        <div
            style={{
                display: "flex",
                gap: props.size / 20,
            }}
        >
            <div>R</div>
            <div>U</div>
            <div>S</div>
            <div
                style={{
                    bottom: props.size / 32,
                }}
            >_</div>
        </div>
    </div>);
};
