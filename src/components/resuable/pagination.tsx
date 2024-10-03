import { useState } from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
    display: flex;
    list-style: none;
    justify-content: center;
    //     padding: 10px;
`;

const PageNumber = styled.button<{ active?: boolean }>`
    background-color: ${(props) => (props.active ? "#0066ff" : "#f2f2f2")};
    color: ${(props) => (props.active ? "#fff" : "#666")};
    border: none;
    border-radius: 5px;
    margin: 0 5px;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.active ? "#0052cc" : "#e0e0e0")};
    }
`;

const PaginationButton = styled.button`
    background-color: #f2f2f2;
    color: #666;
    border: none;
    border-radius: 5px;
    margin: 0 5px;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
        background-color: #e0e0e0;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

const Pagination = ({
    totalPages,
    pageSize,
    currentPage,
    setCurrentPage,
}: {
    totalPages: number;
    pageSize: number;
    currentPage: number;
    setCurrentPage: (_value: number) => void;
}) => {
    //

    const finalTotalPage = Math.ceil(totalPages / pageSize);

    const handleClick = (page: number) => {
        setCurrentPage(page);
    };

    const handleNext = () => {
        if (currentPage < finalTotalPage) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
        }
    };

    return (
        <PaginationContainer>
            <PaginationButton onClick={handlePrev} disabled={currentPage === 1}>
                &lt;
            </PaginationButton>
            {Array.from({ length: finalTotalPage }, (_, index) => (
                <PageNumber
                    key={index + 1}
                    active={currentPage === index + 1}
                    onClick={() => handleClick(index + 1)}
                >
                    {index + 1}
                </PageNumber>
            ))}
            <PaginationButton
                onClick={handleNext}
                disabled={currentPage === finalTotalPage}
            >
                &gt;
            </PaginationButton>
        </PaginationContainer>
    );
};

export default Pagination;
