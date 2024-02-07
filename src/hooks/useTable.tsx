export interface UseTableResult {
	refresh: () => void
	loading: boolean
}

export type UseTableResultList = [() => void, boolean]

function useTable(): UseTableResult {
	return {
		refresh() {},
		loading: false,
	}
}

export default useTable
