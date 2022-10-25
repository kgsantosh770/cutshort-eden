import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import ProgressBar from "./ProgressBar";

describe('Progress Bar', () => {
    it('renders correctly', () => {
        render(<ProgressBar stageCount={1} currentStage={1} />);
        const circleElement = screen.getByTestId("progressBar");
        expect(circleElement).toBeInTheDocument;
    })

    it('stage count is correct based on stageCount prop', () => {
        const stageCount = 3;
        render(<ProgressBar stageCount={stageCount} currentStage={2} />);
        const circleElement = screen.getAllByTestId('progressBar');
        const elementsCount = circleElement.length;
        expect(elementsCount).toEqual(stageCount);
    })

    it('stages until current stage is highlighted', () => {
        const stageCount = 3;
        const currentStage = 2;
        render(<ProgressBar stageCount={stageCount} currentStage={currentStage} />);
        const circleElement = screen.getAllByTestId('progressBar');
        const stagesUntilCurrentStage = circleElement.slice(0, currentStage);
        stagesUntilCurrentStage.forEach(element => {
            expect(element).toHaveClass('bg-primary');
        });
    })
})