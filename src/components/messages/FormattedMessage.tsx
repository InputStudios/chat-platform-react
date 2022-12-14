import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { 
	MessageItemContainer,
	MessageItemDetails,
	MessageItemContent,
	UserAvatarContainer, 
} from "../../utils/styles";
import { User, MessageType, GroupMessageType } from "../../utils/types";
import { EditMessageContainer } from "./EditMessageContainer";
import { MessageItemAttachmentContainer } from "./attachments/MessageItemAttachmentContainer";

type FormattedMessageProps = {
	user?: User;
	message: MessageType | GroupMessageType;
	key: number;
	onContextMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onEditMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormattedMessage: React.FC<FormattedMessageProps> = ({ 
	user, 
	message,
	onContextMenu,
	onEditMessageChange,
}) => {
	const { isEditingMessage, messageBeingEdited } = useSelector(
		(state: RootState) => state.messageContainer
	);
	return (
		<MessageItemContainer onContextMenu={onContextMenu}>
			<UserAvatarContainer />
			<MessageItemDetails>
				{isEditingMessage && message.id === messageBeingEdited?.id ? (
					<MessageItemContent padding="8px 0 0 0">
						<EditMessageContainer onEditMessageChange={onEditMessageChange} />
					</MessageItemContent>
				) : (
					<MessageItemContent padding="8px 0 0 0">
						{message.content || null}
						<MessageItemAttachmentContainer message={message} />
					</MessageItemContent>
				)}
			</MessageItemDetails>
		</MessageItemContainer>
	);
};
