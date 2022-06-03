import {
	SparklineComponent,
	Inject,
	SparklineTooltip,
} from '@syncfusion/ej2-react-charts';
import { DataManager } from '@syncfusion/ej2/data';

interface IProps {
	id: string;
	height: string;
	width: string;
	color: string;
	// eslint-disable-next-line @typescript-eslint/ban-types
	data: Object[] | DataManager | undefined;
	type?: 'Line' | 'Column' | 'WinLoss' | 'Pie' | 'Area' | undefined;
	currentColor: string;
}

const SparkLine = ({
	id,
	height,
	width,
	color,
	data,
	type,
	currentColor,
}: IProps) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType='Numeric'
			fill={color}
			border={{ color: currentColor, width: 2 }}
			tooltipSettings={{
				visible: true,
				// eslint-disable-next-line no-template-curly-in-string
				format: '${x} : data ${yval}',
				trackLineSettings: {
					visible: true,
				},
			}}
			markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
			dataSource={data}
			xName='x'
			yName='yval'
			type={type}
		>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	);
};

export default SparkLine;
