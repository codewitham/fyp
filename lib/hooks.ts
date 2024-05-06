// import { useDispatch, useSelector, useStore } from 'react-redux'
// // import type { AppDispatch, RootState, AppStore } from '@/store/store'

import { toast } from "@/components/ui/use-toast";

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>()
// export const useAppStore = useStore.withTypes<AppStore>()

export const copyCodeToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast({ title: "Code copied to clipboard" });
    } catch (error) {
        console.error('Failed to copy code: ', error);
        toast({ title: "Failed to copy code to clipboard", variant: "destructive" });
    }
};