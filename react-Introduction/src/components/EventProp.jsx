// Passing events as props

const EventProp = () => {
    return (
        <>
            <Download message = 'Downloading!'/>
            <Upload message = 'Uploading!'/>
        </>
    )
}

const Download = ({message}) => {
    return (
        <DownloadButton onDownload = {() => alert(message)}>
            Download
        </DownloadButton>
    )
}

const Upload = ({message}) => {
    return (
        <UploadButton onUpload = {() => alert(message)}>
            Upload
        </UploadButton>
    )
}

const DownloadButton = ({onDownload, children}) => {
    return (
        <button onClick={onDownload}>
            {children}
        </button>
    )
}

const UploadButton = ({onUpload, children}) => {
    return (
        <button onClick={onUpload}>
            {children}
        </button>
    )
}

export default EventProp;