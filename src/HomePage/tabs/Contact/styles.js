export default function styles() {
  return {
    container: {},
    "@keyframes fade-in": {
      "100%": {
        opacity: 1,
        filter: "blur(0)",
      },
    },
    property: {
      display: "flex",
      gap: "1rem",
      lineHeight: "2rem",
      fontSize: "1.2rem",
    },
    formWrapper: {
      "& .ant-input": {
        backgroundColor: "#3c3737",
        margin: '0.625rem',
        width: 'calc(100% - 1.25rem)',
        lineHeight: '2rem',
        borderRadius: '3px',
        border: '2px solid #828282',
        color: '#fff',
        '&:hover':{
          borderColor: '#40a9ff'
        },
        '&::placeholder': {
          color: '#848484',
        }
      },
      "& .ant-btn": {
        marginRight: '1.25rem',
      }
    },
  };
}
