/**
 * @author WMXPY
 * @description Satori
 */

export type SudosaurusIconSatoriProps = {

    readonly size: number;

    readonly color?: string;
    readonly backgroundColor?: string;

    readonly fontWeight?: number;

    readonly fullWidth?: boolean;
    readonly fullHeight?: boolean;

    readonly fontFamily?: string;
};

export const SudosaurusIconSatori: React.FC<SudosaurusIconSatoriProps> = (
    props: SudosaurusIconSatoriProps,
) => {

    return (<div
        style={{
            position: "relative",
            color: props.color,
            backgroundColor: props.backgroundColor,
            width: props.fullWidth ? "100%" : props.size,
            height: props.fullHeight ? "100%" : props.size,
            fontWeight: props.fontWeight,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: props.size / 4,
            fontFamily: props.fontFamily ?? "monospace",
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
                position: "relative",
                gap: props.size / 20,
            }}
        >
            <div>S</div>
            <div>A</div>
            <div>U</div>
            <div
                style={{
                    position: "relative",
                    bottom: props.size / 32,
                }}
            >_</div>
        </div>
        <div
            style={{
                display: "flex",
                position: "relative",
                gap: props.size / 20,
            }}
        >
            <div>R</div>
            <div>U</div>
            <div>S</div>
            <div
                style={{
                    position: "relative",
                    bottom: props.size / 32,
                }}
            >_</div>
        </div>
    </div>);
};
