import React, { createContext, useContext, useState } from "react";

const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [report, setReport] = useState({
    templateId: 0,
    reportData: {},
    responses: [],
    conclusionData: { comment: "", files: [] }
  });

  const setTemplateId = (templateId) => {
    setReport((prevReport) => ({ ...prevReport, templateId }));
  };

  const updateReportData = (newData) => {
    setReport((prevReport) => ({
      ...prevReport,
      reportData: { ...prevReport.reportData, ...newData },
    }));
  };

  const updateResponses = (questionId, response) => {
    setReport((prevReport) => {
      const existingResponse = prevReport.responses.find(
        (r) => r.questionId === questionId
      );
      const updatedResponses = existingResponse
        ? prevReport.responses.map((r) =>
            r.questionId === questionId ? { ...r, response } : r
          )
        : [...prevReport.responses, { questionId, response, comment: "", files: [] }];

      return { ...prevReport, responses: updatedResponses };
    });
  };

  const updateComment = (questionId, comment) => {
    setReport((prevReport) => {
      const existingResponse = prevReport.responses.find(
        (r) => r.questionId === questionId
      );
      const updatedResponses = existingResponse
        ? prevReport.responses.map((r) =>
            r.questionId === questionId ? { ...r, comment } : r
          )
        : [...prevReport.responses, { questionId, comment, response: null, files: [] }];

      return { ...prevReport, responses: updatedResponses };
    });
  };

  const updateFiles = (questionId, selectedFiles) => {
    setReport((prevReport) => {
      const existingResponse = prevReport.responses.find(
        (r) => r.questionId === questionId
      );
      const updatedResponses = existingResponse
        ? prevReport.responses.map((r) =>
            r.questionId === questionId ? { ...r, files: selectedFiles } : r
          )
        : [...prevReport.responses, { questionId, files: selectedFiles, response: null, comment: "" }];

      return { ...prevReport, responses: updatedResponses };
    });
  };

  const removeFile = (questionId, fileIndex) => {
    setReport((prevReport) => {
      const existingResponse = prevReport.responses.find(
        (r) => r.questionId === questionId
      );
      if (existingResponse) {
        const updatedFiles = [...existingResponse.files];
        updatedFiles.splice(fileIndex, 1);
        const updatedResponses = prevReport.responses.map((r) =>
          r.questionId === questionId ? { ...r, files: updatedFiles } : r
        );
        return { ...prevReport, responses: updatedResponses };
      }
      return prevReport;
    });
  };

  const updateConclusionData = (newData) => {
    setReport((prevReport) => ({
      ...prevReport,
      conclusionData: { ...prevReport.conclusionData, ...newData },
    }));
  };

  const submitReport = async () => {
    console.log(report);
    // try {
    //   const response = await fetch("/api/reports", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(report),
    //   });
    //   const data = await response.json();
    //   console.log("Relatório salvo com sucesso:", data);
    // } catch (error) {
    //   console.error("Erro ao salvar o relatório:", error);
    // }
  };

  return (
    <ReportContext.Provider
      value={{
        report,
        setTemplateId,
        updateReportData,
        updateResponses,
        updateComment,
        updateFiles,
        removeFile,
        updateConclusionData,
        submitReport,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export const useReport = () => useContext(ReportContext);
